let tabTabs1 = document.getElementById("tabs1");

let tabNavigation = tabTabs1.firstElementChild;
let tabs = Array.from(tabNavigation.children);

let tabContents = tabTabs1.lastElementChild;
let tabContent = Array.from(tabContents.children);

let activeTabOfTabs1Index;
let activeTab = () => { 
    if(tabs.length > 0) {
        activeTabOfTabs1Index = tabs.indexOf(document.querySelector(".tab_active"));
        console.log(activeTabOfTabs1Index);
    }
    return activeTabOfTabs1Index;
}; activeTab();

let removeActiveTabContent = () => {if (tabs.length === tabContent.length) {
    tabContent[activeTabOfTabs1Index].classList.remove("tab__content_active")}};

let removeActiveTab = () => {tabs[activeTabOfTabs1Index].classList.remove("tab_active")};

tabs.forEach(tab => {tab.addEventListener("click", (event) => { 
    if (tabs.length === tabContent.length) {
     removeActiveTab();
     removeActiveTabContent();
     tab.classList.add("tab_active");
     activeTab();    
     tabContent[activeTabOfTabs1Index].classList.add("tab__content_active")}}
    )})