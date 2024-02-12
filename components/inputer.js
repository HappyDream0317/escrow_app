export default function Inputer(props) {
    return (
        <div>
            <div style={{ textAlign: "justify", marginTop: "30px" }}>
                <label>{props.name}</label>
                <br />
                <input
                    className="bg-[#F0F6FE] mt-[10px] px-4 py-3 rounded-lg outline-none w-full block"
                    placeholder={props.name}
                    type={props.type}
                    value={props.data}
                    onChange={(e) => props.setData(e.target.value)}
                    required
                />
            </div>
        </div>
    );
}
