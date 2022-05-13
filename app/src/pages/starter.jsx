
import { Switch, Match, createSignal } from "solid-js";

function starter(setLogin) {
    console.log(setLogin)
    return (
        <div class="d-flex justify-content-center align-middle vh-100">
            <form class="d-flex flex-column justify-content-center w-25 rounded">
                <div className="bg-light p-5 rounded border">
                    <b class="text-center mt-3">Welcome to opentug Proposal maker</b>
                    <input class="m-2 form-control" type="text" placeholder="Username"></input>
                    <input class="m-2 form-control" type="password" placeholder="Password"></input>
                    <div class="d-flex justify-content-center ">
                        <button class="m-2 btn btn-secondary" onclick={() => { setLogin(true); console.log(this) }}>Login</button>
                        <button class=" m-2 btn btn-secondary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default starter;
