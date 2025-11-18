# Rating   
  
# Custom Radio Buttons with SVG and CSS
This page uses standard [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to implement a user interface for rating on a scale of one to five. Thematic water drops riff on the more conventional "star".  

Vector artwork is defined directly in index.html as [inline SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction) markup. Specifically, we create a set of [SVG symbols](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol), strategically named **#active** and **#inactive**. These symbols are re-used several times (in our radio button labels) via the SVG [use](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) tag. Importantly, [Inline SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction) are adjustable via CSS (e.g. we can change the [fill](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes) on [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)).  

Droplets appear in descending order (5-4-3-2-1) in HTML, but this arrangement is flipped in CSS via [flex-direction: row-reverse](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction). This approach makes it possible to exploit [Subsequent Sibling](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) ([~](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator)) logic in CSS. _Note that CSS lacks a "prior sibling" combinator_. To show / hide the inactive / active SVG symbols, we use the [:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) and [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) psuedo-classes to toggle **display: none** and **display: block**.  

As a caviat, keep in mind that this sort of adaptation involves tradeoffs between visual appearance, brand, usability, and accessibility.  

For comparison (and further inspiration) note that it's also possible to do this without SVGs. For example, [this codepen by James Barnett](https://codepen.io/jamesbarnett/pen/najzYK) employs Font Awesome icons and the [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) pseudo-element. Remember that there are many ways to solve a problem. What other CSS or JavaScript-based approaches can you find?  

This demo was created by [Harold Sikkema](https://nsitu.ca).  