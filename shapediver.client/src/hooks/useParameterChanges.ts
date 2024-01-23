import { useShapeDiverStoreParameters } from "store/useShapeDiverStoreParameters";
import { PropsParameter } from "types/components/shapediver/propsParameter";
import { IParameterChanges } from "types/store/shapediverStoreParameters";
import { useModelSelectStore } from "store/useModelSelectStore";

/**
 * Get parameter change objects for all sessions used by the given parameters.
 * @see {@link IParameterChanges}
 * 
 * @param parameters 
 * @returns 
 */
export function useParameterChanges(parameters: PropsParameter[]) {
	const { selectedModels } = useModelSelectStore((state) => state);
	const sessionIds = parameters.map(p => p.sessionId);

	const parameterChanges = useShapeDiverStoreParameters(state => Object.keys(state.parameterChanges)
		.filter(id => sessionIds.includes(id))
		.reduce((acc, id) => {
			acc.push(state.parameterChanges[id]);
	        
			localStorage.setItem("currentModel",JSON.stringify(selectedModels));
			localStorage.setItem("menuOption",JSON.stringify(acc));
			return acc;
		}, [] as IParameterChanges[])
	);
		
	return parameterChanges;
}
