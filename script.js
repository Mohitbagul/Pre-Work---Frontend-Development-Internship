//preview image section
document.getElementById('outfit').addEventListener('change',function(event){
    const previewContainer= document.getElementById('outfitPreview');
    previewContainer.innerHTML='';

    const files = event.target.files;
    let fileArray = Array.from(files);
    renderPreviews();

    function renderPreviews(){

    previewContainer.innerHTML='';
    
    if(files.length>0){
        fileArray.forEach((file, index) => {

        const reader = new FileReader();
        reader.onload = function(e){
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('preview-image');
            imgContainer.style.position = 'relative';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '200px';
            img.style.height = '150px';
            img.style.display = 'block';
            imgContainer.appendChild(img);

            const removeButton = document.createElement('button');
            removeButton.classList.add("remove-button");
            removeButton.innerHTML = '&times;';
            imgContainer.appendChild(removeButton);

            previewContainer.appendChild(imgContainer);

            removeButton.addEventListener('click',function(){
                fileArray.splice(index,1);
                renderPreviews();
            })
        }

        reader.readAsDataURL(file);
    });
    }
}
})


//drop down menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-content li');
    const dropbtn = document.querySelector('.selected_text_display');


    dropdownItems.forEach(item=>{
        item.addEventListener('click',function(event){
            event.preventDefault();
            dropbtn.textContent = this.textContent;
        })
    });
});


//for alternate left and right ways appearance of form sections
const boxes = document.querySelectorAll('.form_div');
window.addEventListener('scroll',apperanceBoxes);
apperanceBoxes();

function apperanceBoxes(){
    const triggerBottom = window.innerHeight/5*4;

    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop<triggerBottom){
            box.classList.add('show');
        } else{
            box.classList.remove('show');
        }
    })
}


//visiblilty of scroll up button
window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            const scroll_up = document.getElementById("scroll_up");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scroll_up.style.display = "block";
            } else {
                scroll_up.style.display = "none";
            }
        }

        // Scroll to the top of the document when the user clicks the button
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
