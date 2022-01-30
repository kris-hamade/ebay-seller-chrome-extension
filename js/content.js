
const addEbayTools = () => {

// Defines the First List Item in the eBay Search Navbar on the Right Side of the Page
const ebayFirstLi = document.getElementById('gh-p-2')

// The below items are for inserting the new li onto the page and adding basic functionality
let parent = ebayFirstLi.parentNode

var li = document.createElement("li")

li.setAttribute("id", "gh-p-1")
li.setAttribute("class", "gh-eb-li gh-t-rt gh--link__divider")



parent.insertBefore(li, ebayFirstLi)

const advancedSellerToolsAttribute = document.createElement("a")

advancedSellerToolsAttribute.setAttribute()

li.appendChild(advancedSellerToolsAttribute);

advancedSellerToolsAttribute.createTextNode("Advanced Seller Tools")


}

window.onload = addEbayTools();

