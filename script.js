function footer(){
    return <footer class="footer">
    <ul>
        <li>rizgar company</li>
        <li>created by Pelda Petekkaya</li>
    </ul>
</footer>;
}
const footerPart = document.getElementsByClassName("footer");
const footerComponent = ReactDOM.createRoot(footerPart);
footerComponent.render(<footer/>);

const menu = document.getElementsByClassName("menu");
