import Card from "./index";
// import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "../../assets/image"
// import { LogoIcon} from "../../assets/icon"
import {  Four} from "../../assets/icon"
// import {buildings} from "../../assets/image"

import "./cardList.scss";

function CardList() {
  return (
    <div className="card-list">
      {/* <Card icon={Tens} title="Users" amount="2,453" /> */}
      {/* <Card icon={LogoIcon} title="Active Users" amount="2,453" /> */}
      <Card icon={Four} title="Users with Loans" amount="12,453" />
      {/* <Card icon={buildings} alt="metarkitex buildings render"  title="Users" amount="2,453" /> */}
      <Card icon={Four} title="Active Users" amount="2,453" />
      <Card icon={Four} title="Users with Loans" amount="12,453" />
      <Card icon={Four} title="Users" amount="2,453" />
      <Card icon={Four} title="Active Users" amount="2,453" />
      <Card icon={Four} title="Users with Loans" amount="12,453" />
      <Card icon={Four} title="Users" amount="2,453" />
      <Card icon={Four} title="Active Users" amount="2,453" />
      <Card icon={Four} title="Users with Loans" amount="12,453" />
      <Card icon={Four} title="Users" amount="2,453" />
      <Card icon={Four} title="Active Users" amount="2,453" />
      <Card icon={Four} title="Users with Loans" amount="12,453" />
      <Card icon={Four} title="Users" amount="2,453" />
      <Card icon={Four} title="Active Users" amount="2,453" />
      <Card icon={Four} title="Users with Loans" amount="12,453" />
    </div>
  );
}

export default CardList;
