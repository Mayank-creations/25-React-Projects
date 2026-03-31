import Header from "./components";
import sections from "./data.js";
import { useState } from "react";

export default function App() {

    const [selected, setSelected] = useState(null)

    function afterSelect(id){
        setSelected(selected === id ? null : id)
    }

    return (
        <div id="heading">
            <h3>ACCORDION</h3>
            {sections && sections.length > 0 ?
                sections.map((section) => (
                    <div key={section.id}>
                        <div className="accordion-item">
                            <Header title={section.title} />
                            <button onClick={() => afterSelect(section.id)}>+</button>
                        </div>
                        {selected === section.id && 
                            <div className="accordion-content">{section.content}</div>
                        }
                    </div>
                ))
                : <div>Data not present</div>
            }
        </div>
    );
}

