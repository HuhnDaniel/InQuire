import React from "react";
import { useQuestionContext } from "../utils/CreateQuestionState";

function CreateMultiple() {
    const [state, dispatch] = useQuestionContext();

    function handleFieldChange(e) {
        console.log(e.target);
        dispatch({
            call: "change",
            slot: parseInt(e.target.id),
            choice: e.target.value,
            type: e.target.name
        });
    }

    return(
        <div className="flex flex-col text-xl flex-1">
            Answer Choices:
            <label className="">
                1.
                <input className="ml-4 my-2 w-auto" type="text" name="answer" id="0" onChange={handleFieldChange} />
            </label>
            <label className="">
                2.
                <input className="ml-4 my-2 w-auto" type="text" name="answer" id="1" onChange={handleFieldChange} />
            </label>
            <label className="">
                3.
                <input className="ml-4 my-2 w-auto" type="text" name="answer" id="2" onChange={handleFieldChange} />
            </label>
            <label className="">
                4.
                <input className="ml-4 my-2 w-auto" type="text" name="answer" id="3" onChange={handleFieldChange} />
            </label>
        </div>
    );
}

export default CreateMultiple;