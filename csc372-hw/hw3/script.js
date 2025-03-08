document.addEventListener("DOMContentLoaded", function() {
    const dishes = document.querySelectorAll(".dish");
    const descriptions = document.querySelectorAll(".dish-description");
    
    dishes.forEach(dish => {
        dish.addEventListener("click", function() {
            dishes.forEach(d => d.classList.remove("selected"));
            descriptions.forEach(desc => desc.style.display = "none");
            
            this.classList.add("selected");
            let descContainer = this.parentElement.nextElementSibling;
            descContainer.textContent = `${this.dataset.name} - $${this.dataset.price}`;
            descContainer.style.display = "block";
        });
    });
});
