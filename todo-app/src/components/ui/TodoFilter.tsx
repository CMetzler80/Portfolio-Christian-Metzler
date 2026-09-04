
interface TodoFilterProps {
    filter: "All" | "Done" | "Open";
    filterChange: (filter: "All" | "Done" | "Open") => void;
}


export default function TodoFilter({ filter, filterChange }: TodoFilterProps) {


    return (
        <div>
            <button onClick={() => filterChange("All")} disabled={filter == "All" ? true : false}>all</button>
            <button onClick={() => filterChange("Done")} disabled={filter == "Done" ? true : false}>done</button>
            <button onClick={() => filterChange("Open")} disabled={filter == "Open" ? true : false}>open</button>
        </div>
    )
}