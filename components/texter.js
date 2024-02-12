export default function Texter(props) {
    return (
        <div>
            <div style={{ textAlign: "justify", marginTop: "30px" }}>
                <label>{props.name}</label>
                <br />
                <textarea
                    className="bg-[#F0F6FE] mt-[10px] px-4 py-3 rounded-lg outline-none w-full block h-[120px]"
                    placeholder={props.textplacer}
                />
            </div>
        </div>
    );
}
