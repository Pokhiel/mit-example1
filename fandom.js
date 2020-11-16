window.dispatchPostQuecastAction = window.dispatchPostQuecastAction || function (action, channelId) {
    channelId = channelId || 'default';
    action.timestamp = Date.now();
    action.__global = true;
    var data = {
        action: action,
        channelId: channelId,
        private: true,
        libId: '@wikia/post-quecast'
    };
    top.postMessage(data, '*');
}

window.dispatchPostQuecastAction({
    type: "[GAM iframe] Load template",
    payload: {
        campaign: "552806",
        config: {"id":"552806","desktop":{"aspectRatio":{"default":4.0,"resolved":10.0},"images":{"boxad300x250":null,"boxad300x600":null,"default":"https://static.nocookie.net/fandom-ae-assets/programmatic/campaign/552806/FT_Auto_XboxSeriesX+Launch+UK_1600x400.jpg","resolved":"https://static.nocookie.net/fandom-ae-assets/programmatic/campaign/552806/FT_Auto_XboxSeriesX+Launch+UK_1600x160.jpg"}},"mobile":{"aspectRatio":{"default":1.7777778,"resolved":3.0},"images":{"boxad300x250":null,"boxad300x600":null,"default":"https://static.nocookie.net/fandom-ae-assets/programmatic/campaign/552806/FT_Auto_XboxSeriesX+Launch+UK_640x360.jpg","resolved":null}},"autoplay":true,"clickThroughUrl":"${CLICK_URL}https://ad.doubleclick.net/ddm/trackclk/N572608.468584AMNETGROUP/B24715775.283700637;dc_trk_aid=478301410;dc_trk_cid=139112488;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ord=${CACHEBUSTER};click=${CLICK_URL}","thumbnail":"https://static.nocookie.net/fandom-ae-assets/programmatic/campaign/552806/FT_Auto_XboxSeriesX+Launch+UK_Thumb_654x368.jpg","video":"https://static.nocookie.net/fandom-ae-assets/programmatic/campaign/552806/PLM_UsDreamersAC_GBR_15sec_VDG_AGN_English_NA_Standard_HOV_NA_NA_1.mp4","videoDuration":15,"formattedVideoDuration":"00:00:15"},
        slotName: "hivi_leaderboard",
        type: "safeFanTakeoverElement"
    }
});