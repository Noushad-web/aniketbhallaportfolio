import scrollToTopArrow from "assets/scroll-to-top-arrow.svg";

const ScrollToTop = () => {
    return (
        <a href="portfolioTop" id='scrollToTopBtn'>
            <img src={scrollToTopArrow} alt="scroll to top arrow not available" />
        </a>
    )
}

export default ScrollToTop;
