import Card from "./components/Card";
import './App.css';
const tickmark="fa-sharp fa-solid fa-check fa-lg m-3";
const xmark="fa-sharp fa-solid fa-xmark fa-lg m-3 ";
const muteword="text-muted";
function App() {
  return (
    <><div className="container">
    <div className="row">
      <div className="col-lg-4">
        <Card content1="Single User" content2="5GB Storage" content3="Free Subdomain" li1={tickmark} li5={xmark} li6={xmark} li7={xmark} li8={xmark} content4={muteword} content5={muteword} money="0" freepluspro="Free"/>
      </div>
      <div className="col-lg-4">
        <Card content1="5 Users" content2="50GB Storage" content3="Free Subdomain" li1={tickmark} li5={tickmark} li6={tickmark} li7={tickmark} li8={xmark} content5={muteword}money="9" freepluspro="plus"/>
      </div>
      <div className="col-lg-4">
        <Card content1="Unlimited Users" content2="150GB Storage" content3="Unlimited Free Subdomains" li1={tickmark} li5={tickmark} li6={tickmark} li7={tickmark} li8={tickmark} money="49" freepluspro="pro"/>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
