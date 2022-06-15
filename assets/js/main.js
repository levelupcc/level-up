////////////////////////////////////////////////////////////
// @tingeber javascript function to add "active" class
// adapted from: https://css-tricks.com/forums/topic/how-to-keep-the-page-highlighted-on-the-nav-bar/
// to top-level <li> components on navigation
// ignores lower level links, and seems to be fairly efficient
// added inline because there is no separate JS file at the moment
// and it seemed overkill to make one
///////////////////////////////////////////////////////////

function navHighlight(link, active) {
	let url = location.href.split("/"),
		currentUrl = "/" + url[3] + "/",
		linkList = document.querySelectorAll(link);
	for (const link in linkList) {
		if (linkList[link].pathname === currentUrl) {
			linkList[link].parentNode.className += " " + active;
		}
	}
}
navHighlight("nav > ul.menu > li > a.menu-link", "active");

////////
// end
///////
