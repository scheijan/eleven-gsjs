var name		= "Local Yolkel";
var collection_type	= 0;
var is_secret		= 0;
var desc		= "Polished off 53 eggs";
var status_text		= "You're more than a mite peckish. You've achieved Local Yolkel status.";
var last_published	= 1348801510;
var is_shareworthy	= 1;
var url		= "local-yolkel";
var category		= "player";
var url_swf		= "\/c2.glitch.bz\/achievements\/2011-05-09\/local_yolkel_1304983532.swf";
var url_img_180		= "\/c2.glitch.bz\/achievements\/2011-05-09\/local_yolkel_1304983532_180.png";
var url_img_60		= "\/c2.glitch.bz\/achievements\/2011-05-09\/local_yolkel_1304983532_60.png";
var url_img_40		= "\/c2.glitch.bz\/achievements\/2011-05-09\/local_yolkel_1304983532_40.png";
function on_apply(pc){
	
}
var conditions = {
	52 : {
		type	: "counter",
		group	: "items_eaten",
		label	: "egg_plain",
		value	: "53"
	},
};
function onComplete(pc){ // generated from rewards
	var multiplier = pc.buffs_has('gift_of_gab') ? 1.2 : pc.buffs_has('silvertongue') ? 1.05 : 1.0;
	multiplier += pc.imagination_get_achievement_modifier();
	if (/completist/i.exec(this.name)) { 
		 var level = pc.stats_get_level(); 
		 if (level > 4) {  
				multiplier *= (pc.stats_get_level()/4); 
		} 
	} 
	pc.stats_add_xp(round_to_5(150 * multiplier), true);
	pc.stats_add_favor_points("pot", round_to_5(25 * multiplier));
	if(pc.buffs_has('gift_of_gab')) {
		pc.buffs_remove('gift_of_gab');
	}
	else if(pc.buffs_has('silvertongue')) {
		pc.buffs_remove('silvertongue');
	}
}
var rewards	= {
	"xp"	: 150,
	"favor"	: {
		"giant"		: "pot",
		"points"	: 25
	}
};

// generated ok (NO DATE)
