module.exports = function NPCLogger(dispatch) {
	const command = dispatch.command || dispatch.require.command;
	let npcs = new Map();
	let enabled = true;
	
	command.add(`npclogger`, () => {
		enabled = !enabled;
		logMessage(`Logging is now ${enabled}`)
	});
	
	dispatch.hook(`S_LOGIN`, 14, () => {
		npcs.clear();
	});	
	
	dispatch.hook(`S_LOAD_TOPO`, 3, () => {
		npcs.clear();
	});	
	
	dispatch.hook(`S_SPAWN_NPC`, 11, (event) => {
        npcs.set(event.gameId, {
            target: event.target,
            templateId : event.templateId,
            relation : event.relation,
            huntingZoneId : event.huntingZoneId,
            questInfo : event.questInfo,
            loc: event.loc,
            name: event.name,
			unkn1: event.unkn1
        });
    });
		
	dispatch.hook(`S_DESPAWN_NPC`, 3, (event) => {
		npcs.delete(event.gameId);
	})
	
	dispatch.hook(`C_NPC_CONTACT`, 2, (event) => {
		if (!enabled){
			return;
		}		
		let npc = npcs.get(event.gameId);
		if (npc){			
			logMessage(`[C_NPC_CONTACT] gameId: ${event.gameId}; templateId: ${npc.templateId}, huntingZoneId: ${npc.huntingZoneId} `);
		}
		else{
		}
	});
	
	function logMessage(message){
		command.message(message);
		console.log(message);
	}
}