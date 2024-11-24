import { useState } from "react";
import {calculateInvestmentResults} from '../util/investment';

export default function UserInfo({onChangeInput, userInfo}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" value={userInfo.initialInvestment} required onChange={(event) => onChangeInput('initialInvestment', event.target.value)}/>
                </div>
                <div >
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" value={userInfo.annualInvestment} required onChange={(event) => onChangeInput('annualInvestment', event.target.value)}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>EXPECTED RETURN</label>
                    <input type="number" value={userInfo.expectedReturn} required onChange={(event) => onChangeInput('expectedReturn', event.target.value)}/>
                </div>
                <div >
                    <label>DURATION</label>
                    <input type="number" value={userInfo.duration} required onChange={(event) => onChangeInput('duration', event.target.value)}/>
                </div>
            </div>
        </section>
    )
}