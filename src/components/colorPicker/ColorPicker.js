import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveCircleColor } from "../../features/colorSelector/colorSelectorSlice";
// import ActiveColorSelection from "../activeColorSelection/ActiveColorSelection";

const ColorPicker = () => {
    const dispatch = useDispatch()
    const pickerColor = useSelector((state) => state.colorSelector.activeCircleColor)

    return (
        <div className="sketchPicker">

        {/* <ActiveColorSelection pickerColor={pickerColor} /> */}

        <SketchPicker
          onChange={(color) => {
            dispatch(changeActiveCircleColor(color.rgb))
          }}
          color={pickerColor}
        />
      </div>

      
    )

}

export default ColorPicker