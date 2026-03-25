document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const amount = parseInt(urlParams.get('amount')) || 150;
    
    // Update price display
    document.getElementById('price').textContent = `KES ${amount}`;
    
    const paymentForm = document.getElementById('paymentForm');
    const payButton = document.getElementById('payButton');
    
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        payWithPaystack();
    });
    
    function payWithPaystack() {
        const idNumber = document.getElementById('idNumber').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        
        if (!idNumber || !phoneNumber) {
            alert('Please fill in all fields');
            return;
        }
        
        const ref = 'FULIZA_' + Date.now();
        
        const handler = PaystackPop.setup({
            key: 'pk_live_19caaea5b3f865073305c366d05254d3f50bcf1a', // Replace with your live public key
            email: 'customer@fuliza.com',
            amount: amount * 100, // Amount in kobo
            currency: 'KES',
            ref: ref,
            label: "Fuliza Limit Boost Payment",
            metadata: {
                phone: phoneNumber,
                id_number: idNumber
            },
            callback: function(response) {
                alert(`Payment successful! Reference: ${response.reference}`);
                // Redirect back to main page
                window.location.href = '/?success=true&ref=' + response.reference;
            },
            onClose: function() {
                alert('Payment was not completed. You can try again.');
                window.location.href = '/';
            }
        });
        
        handler.openIframe();
    }
    
    // Alternative payment methods (placeholders)
    document.getElementById('paypalButton').addEventListener('click', function() {
        alert('PayPal integration coming soon');
    });
    
    document.getElementById('stripeButton').addEventListener('click', function() {
        alert('Stripe integration coming soon');
    });
});