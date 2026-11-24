# Rating   
  
# Custom Radio Buttons with SVG and CSS
This page uses standard [radio buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to implement a user interface for rating on a scale of one to five. Poké Balls take the place of the more conventional stars.

Each radio button label uses the same external [Poké Ball SVG](./pokeball.svg). Active ratings show its original colors, while inactive ratings use a CSS [grayscale filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale) and reduced opacity.

Ratings appear in descending order (5-4-3-2-1) in HTML, but this arrangement is flipped in CSS via [flex-direction: row-reverse](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction). This approach makes it possible to use the [subsequent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator) (`~`) to highlight the selected rating and all lower ratings. The [:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) and [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) pseudo-classes determine which images appear active. Hovering previews a rating without changing the selection.

As a caviat, keep in mind that this sort of adaptation involves tradeoffs between visual appearance, brand, usability, and accessibility.  

For comparison (and further inspiration) note that it's also possible to do this without SVGs. For example, [this codepen by James Barnett](https://codepen.io/jamesbarnett/pen/najzYK) employs Font Awesome icons and the [::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) pseudo-element. Remember that there are many ways to solve a problem. What other CSS or JavaScript-based approaches can you find?  

This demo was created by [Harold Sikkema](https://nsitu.ca).  