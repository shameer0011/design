const ColoredLine = ({ color, height, width }) => (
    <hr
        style={ {
            color: color,
            backgroundColor: color,
            height: { height },
            border: "1px solid",
            width: `${width}px`
        } }
    />
);
export default ColoredLine;