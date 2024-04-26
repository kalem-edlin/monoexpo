import type { Mixpanel } from "mixpanel-react-native"
import { Platform } from "react-native"
import c from "../../utils/conditionals"

const trackAutomaticEvents = true
let mixpanel: Mixpanel | undefined

const initMixpanel = async () => {
	const MixpanelObject = c.Mixpanel

	if (MixpanelObject) {
		if (!process.env.MIXPANEL_TOKEN) {
			throw new Error("This build is missing the mixpanel token env")
		}
		mixpanel = new MixpanelObject(
			process.env.MIXPANEL_TOKEN,
			trackAutomaticEvents
		)
	}
}

if (Platform.OS === "ios") {
	initMixpanel()
}

export default mixpanel
