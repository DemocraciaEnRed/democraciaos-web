// TODO: check if it is the best way to animate
export default (e) => {
    e.preventDefault();
    window.scroll({ 
        behavior: 'smooth', 
        left: 0, 
        top: document.getElementById(e.target.dataset.target).getBoundingClientRect().top + 
            window.scrollY 
    });
};