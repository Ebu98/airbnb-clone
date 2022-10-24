import Card from "./index";
import Four from "../../assets/icon/four.svg"
import ImageOne  from "../../assets/image/nine.jpeg"
import Six from "../../assets/image/six.jpg"
import Ten from "../../assets/image/ten.jpg"
import Fours from "../../assets/image/four.jpg"
import Five from "../../assets/image/five.jpg"
import Seven from "../../assets/image/seven.jpg"
import Eight from "../../assets/image/eight.jpg"
import Two from "../../assets/image/two.jpg"
import Three from "../../assets/image/three.jpg"
import One from "../../assets/image/one.jpg"
import Isaac from "../../assets/image/isaac.jpg"
import Tall from "../../assets/image/tallhouse.jpg"
import Sand from "../../assets/image/sand.jpg"
import Phone from "../../assets/image/phone.jpg"
import Blank from "../../assets/image/blank.jpg"
import Beach from "../../assets/image/beach.jpg"
import Brain from "../../assets/image/brain.jpg"
import Flawer from "../../assets/image/flawer.jpg"


import "./cardList.scss";

function CardList() {
  return (
    <div className="card-list">
      <Card icon={ImageOne}  title="Marakesh,Morocco" subtitle="3,041 kilometers away" date="Non 1-6" day="night"amount="2,453" />
      <Card icon={Six} title="Users with Loans" subtitle="3,041 kilometers away" date="Feb 2-3" day="night"amount="12,453" />
      <Card icon={Ten}  title="Marakesh,Morocco" subtitle="3,041 kilometers away" date="Jan 2 -Dec 3" day="night"amount="2,453" />
      <Card icon={Fours} title="Users with Loans" subtitle="3,041 kilometers away" date="Jun 9 -7" day="night"amount="12,453" />
      <Card icon={Five}  title="Marakesh,Morocco" subtitle="3,041 kilometers away" date="Mar 3" day="night"amount="2,453" />
      <Card icon={Seven} title="Users with Loans" subtitle="3,041 kilometers away" date="Jul 9" day="night"amount="12,453" />
      <Card icon={Eight}  title="Marakesh,Morocco" subtitle="3,041 kilometers away" date="Dec 10" day="night"amount="2,453" />
      <Card icon={Two} title="Users with Loans" subtitle="3,041 kilometers away" date="Jan 23 - 30" day="night"amount="12,453" />
      <Card icon={Three}  title="Active Users" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="2,453" />
      <Card icon={Flawer} title="Users with Loans" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="12,453" />
      <Card icon={Sand}  title="Active Users" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="2,453" />
      <Card icon={Four} title="Users with Loans" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="12,453" />
      <Card icon={Beach}  title="Active Users" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="2,453" />
      <Card icon={Tall} title="Users with Loans" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="12,453" />
      <Card icon={Four}  title="Tias,Spain" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="2,453" />
      <Card icon={Phone} title="Users with Loans" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="12,453" />
      <Card icon={Seven} title="Users with Loans" subtitle="3,041 kilometers away" date="Jan 23 - 30" day="night"amount="12,453" />
      <Card icon={Fours} title="Users with Loans" subtitle="3,041 kilometers away" date="Jun 9 -7" day="night"amount="12,453" />
      <Card icon={Five}  title="Active Users" subtitle="3,041 kilometers away" date="Mar 3" day="night"amount="2,453" />
      <Card icon={One}  title="Active Users" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="2,453" />
      <Card icon={Two} title="Users with Loans" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="12,453" />
      <Card icon={Blank}  title="Active Users" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="2,453" />
      <Card icon={Flawer} title="Users with Loans" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="12,453" />
      <Card icon={Isaac}  title="Active Users" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="2,453" />
      <Card icon={Eight} title="Users with Loans" subtitle="3,041 kilometers away" date="Nov 2 -4" day="night"amount="12,453" />
      <Card icon={Brain}  title="Active Users" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="2,453" />
      <Card icon={One} title="Users with Loans" subtitle="3,041 kilometers away" date="Dec 23-25" day="night"amount="12,453" />
      <Card icon={Fours} title="Users with Loans" subtitle="3,041 kilometers away" date="Jun 9 -7" day="night"amount="12,453" />
      <Card icon={Six} title="Users with Loans" subtitle="3,041 kilometers away" date="Feb 2-3" day="night"amount="12,453" />
      <Card icon={Ten}  title="Active Users" subtitle="3,041 kilometers away" date="Jan 2 -Dec 3" day="night"amount="2,453" />
      <Card icon={Five}  title="Active Users" subtitle="3,041 kilometers away" date="Mar 3" day="night"amount="2,453" />
      <Card icon={Fours} title="Users with Loans" subtitle="3,041 kilometers away" date="Jun 9 -7" day="night"amount="12,453" />
    </div>
  );
}

export default CardList;
