 document.addEventListener('DOMContentLoaded', () => {
            const accHeaders = document.querySelectorAll('.sd-acc-header');
            const images = document.querySelectorAll('.sd-service-img');

            function closeAllItems() {
                document.querySelectorAll('.sd-acc-item').forEach(item => {
                    item.classList.remove('sd-active');
                    item.querySelector('.sd-acc-body').style.maxHeight = null;
                });
                images.forEach(img => img.classList.remove('sd-img-active'));
            }

            function activateItem(item) {
                 // Close others first to create accordion effect
                 closeAllItems();

                // Activate clicked item
                item.classList.add('sd-active');
                const body = item.querySelector('.sd-acc-body');
                body.style.maxHeight = body.scrollHeight + "px";

                // Activate corresponding image
                const index = item.getAttribute('data-image-index');
                if(images[index]) {
                    images[index].classList.add('sd-img-active');
                }
            }

            accHeaders.forEach(header => {
                header.addEventListener('click', (e) => {
                    const currentItem = e.currentTarget.parentElement;
                    // If clicking the already active item, do nothing (or optionally toggle close)
                    if (currentItem.classList.contains('sd-active')) return;
                    
                    activateItem(currentItem);
                });
            });

            // Initialize height for the default active item on load
            const initialActive = document.querySelector('.sd-acc-item.sd-active .sd-acc-body');
            if(initialActive) {
                 initialActive.style.maxHeight = initialActive.scrollHeight + "px";
            }
        });