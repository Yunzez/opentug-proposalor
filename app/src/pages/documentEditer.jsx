import { Switch, Match, createSignal } from "solid-js";
import styles from '../App.module.css';

function documentEditer() {
    return (
        <div class="row" style="height:100vh;">
            <div class="col-3 ${styles.generaldark}">
                <h1>opentug</h1>
                <div class="p-2">
                    <h5 class="${styles.active} mt-3">Basic Information</h5>
                </div>
                <div class="p-2">
                    <h5 class="mt-3">text</h5>
                </div>
                <div class="p-2">
                    <h5 class="mt-3">price</h5>
                </div>
                <div class="p-2">
                    <h5 class="mt-3">assets</h5>
                </div>
                <div class="p-2">
                    <h5 class="mt-3">Review and Download</h5>
                </div>
                <div class="p-2">
                    <h5 class="mt-3">Add section</h5>
                </div>
                <hr></hr>
                <div class="btn btn-light btn-lg m-1">
                    Preview
                </div>
                <div class="btn btn-light btn-lg m-1">
                    Download
                </div>

            </div>
            <div class="col-9">

                <h3 class="mt-3 ms-5">Basic Information</h3>
                <div class="container">
                    <h5>Proposal title</h5>
                    <div class="input-group input-group-lg conatiner mt-2">
                        <input type="text" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <h5>Customer/Company Name</h5>
                    <div class="input-group input-group-lg conatiner mt-2">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <h5>Your company name</h5>
                    <div class="input-group input-group-lg conatiner mt-2">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <h5>Author</h5>
                    <div class="input-group input-group-lg conatiner mt-2">
                        <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                    <div class='d-flex justify-content-between mt-2'>
                        <div>
                            <h5>email</h5>
                            <div class="input-group input-group-lg conatiner">
                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                        </div>
                        <div>
                            <h5>phone number</h5>
                            <div class="input-group input-group-lg conatiner">
                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-sm"></input>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default documentEditer