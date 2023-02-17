import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import { changeACSstateToColorPickingST, changeActiveCircleColor } from "../../features/colorSelector/colorSelectorSlice";

const ColorPicker = () => {
    const dispatch = useDispatch()
    const pickerColor = useSelector((state) => state.colorSelector.activeCircleColor)

    return (
        <div className="sketchPicker">

        <SketchPicker
          onChange={(color) => {
            dispatch(changeACSstateToColorPickingST())
            dispatch(changeActiveCircleColor(color.rgb))
          }}
          color={pickerColor}
        />
      </div>

      
    )

}

export default ColorPicker