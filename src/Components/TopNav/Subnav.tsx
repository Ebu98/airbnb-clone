import React from 'react'

import { ReactComponent as SwitchIcon } from "../../assets/icon/swtch.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icon/dashboard.svg";
import { ReactComponent as UsersIcon } from "../../assets/icon/users.svg";
import { ReactComponent as GuarantorsIcon } from "../../assets/icon/garantor.svg";
import { ReactComponent as LoansIcon } from "../../assets/icon/loan.svg";
import { ReactComponent as DecisionIcon } from "../../assets/icon/decisions.svg";
import { ReactComponent as SavingsIcon } from "../../assets/icon/saving.svg";
import { ReactComponent as LoanreqIcon } from "../../assets/icon/loan-reqest.svg";
import { ReactComponent as WhitelistIcon } from "../../assets/icon/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../../assets/icon/karma.svg";
import { ReactComponent as OrganizationIcon } from "../../assets/icon/organise.svg";
import { ReactComponent as LoanProIcon } from "../../assets/icon/loan-product.svg";
import { ReactComponent as SavingsProIcon } from "../../assets/icon/savings-product.svg";
import { ReactComponent as FeesCharIcon } from "../../assets/icon/fees.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icon/transaction.svg";
import { ReactComponent as ServicesIcon } from "../../assets/icon/services.svg";
import { ReactComponent as ServiceAccIcon } from "../../assets/icon/services-acct.svg";
// import { PreferencesIcon, FeesPriceIcon, AuditLogsIcon, CaretIcon,ReportsIcon,SettlementsIcon,ServiceAccIcon,TransactionsIcon,FeesCharIcon,SavingsProIcon } from "../../assests/icon"
import "./sidebar.scss";

const Subnav = () => {
  const TOPBAR = [
    {
      icon: SwitchIcon,
      text: "OMG!",
    },
    {
      icon: DashboardIcon,
      text: "Beach",
    },
    {
      icon: UsersIcon,
      text: "Design",
    },
    {
      icon: GuarantorsIcon,
      text: "National",
    },
    {
      icon: LoansIcon,
      text: " Amazing pools",
    },
    {
      icon: DecisionIcon,
      text: "Shared homes",
    },
    
    {
      icon: LoanreqIcon,
      text: "Iconic cities",
    },
    {
        icon: SavingsIcon,
        text: "Beds & breakfasts",
      },
    {
      icon: WhitelistIcon,
      text: "Tropical",
    },
    {
      icon: KarmaIcon,
      text: "Caves",
    },
    {
      icon: OrganizationIcon,
      text: "Houseboats",
    },

    {
      icon: LoanProIcon,
      text: "Mansions",
    },
    {
      icon: SavingsProIcon,
      text: "Tiny homes",
    },
    {
      icon: FeesCharIcon,
      text: "Arctic",
    },
    {
      icon: TransactionsIcon,
      text: "Islands",
    },
    {
      icon: ServicesIcon,
      text: "Cabins",
    },
    {
      icon: ServiceAccIcon,
      text: "Boats",
    },
    
  ];
      return (
        <section className="sidebar-container">
            <div className="table-wraper">
            {TOPBAR.map(({text, icon: Icon}) => {
            return (
                <div>
                  <div>
                    <Icon />
                  </div>
                  <p>{text}</p>
                </div>
            );
          })}
          
            </div>
            <button><p></p>Filters</button>
        </section>
      );
    };


export default Subnav