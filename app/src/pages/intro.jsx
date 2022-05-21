import { Switch, Match, createSignal } from "solid-js";
import styles from '../App.module.css';

function intro(setCustomer) {
    return (
        <div>
            <h1>Opentug</h1>
            <div class="container">
                <div class="list-group">
                    <h5 class="mb-3 mt-5">Create a customizable sales proposal to send to any of your clients.
                        You can reuse this template when sending customers proposals!</h5>

                    <div class="d-flex justify-content-between">
                        <img class="w-50" src="../src/assets/opendoc.svg"></img>
                        <div>
                            <h5 class="mb-3">Current Features:</h5>
                            <h5>
                                1. Fill in information step by step
                            </h5>
                            <h5>
                                2. Review document
                            </h5>
                            <h5>
                                3. Publish/Download and send to customer
                            </h5>
                            <div class="text-center mt-5">
                                <p class="btn btn-lg mt-5" style="color:white; background-color:#54968F;" onclick={() => { setCustomer(true) }}>Get Started</p>
                            </div>
                            <div class="form-check float-end">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Don't show again
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default intro