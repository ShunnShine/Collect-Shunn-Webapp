import React, {useState} from "react";
import ResizeTextBox from "./ResizeTextBox";
import SearchIconToggle from "./SearchIconToggle";

export default function AddNewItem(props){
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

        return (
        !expanded ? 
        <div className="flex-1 m-5 rounded-xl h-11 bg-customColor-darkBlue flex items-center" onClick={() => setExpanded(prev => !prev)}>
            <span className="text-xl text-customColor-lightGrey mx-3">Add new...</span>
        </div>
        :
        <div className="flex-1 m-5 rounded-xl bg-customColor-darkBlue flex flex-col">
            <div className="flex flex-col ml-5">
                <div className="flex items-center mb-3">
                    <span className="text-xl text-white">Title</span>
                    <ResizeTextBox placeholder="(optional)" value={title} onChange={event => setTitle(event.target.value)} className="bg-transparent border border-black text-xl text-white text-center"/>
                    <div className="flex-1"></div>
                    <input type="date" className="bg-transparent text-white text-xl px-3 border-l-4 border-b-4 border-customColor-orange"/>
                </div>
                <textarea value={text} onChange={event => setText(event.target.value)} className="resize-none bg-transparent border border-black rounded-md text-white text-xl mr-5"></textarea>
            </div>
            <div className="flex items-center ml-1 mr-5 my-3 text-xl">
                <SearchIconToggle />
                <span className="mx-3 text-white">Search</span>
                <input value={search} onChange={event => setSearch(event.target.value)} type="text" className="flex-1 bg-transparent border border-black rounded-md text-white" placeholder="Title (year)"></input>
            </div>
        </div>
    )
}