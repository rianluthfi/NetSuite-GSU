/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */

/*
 * Note
 * TaxAmount masih belum bisa dihilangkan
 */
define(['N/record', 'N/ui/serverWidget', 'N/runtime'],

function(record, serverWidget, runtime) {
   
    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {string} scriptContext.type - Trigger type
     * @param {Form} scriptContext.form - Current form
     * @Since 2015.2
     */
    function beforeLoad(context) {
    	
    	/*
    	 * Setting tampilan field pada proses SO
    	 * Dimana user dengan Role Pool, tidak boleh melihat nilai Amount
    	*/
    	
    	var form 			= context.form; // Get Form context
    	var itemObj  		= form.getSublist({id : 'item'}); // Get Sublist Item Object
    	var userObj 		= runtime.getCurrentUser(); // For get current user
    	
    	//################################
    	//### Deklarasi Variabel Field ###
    	//################################
    	
    	//Field Standard
		var entity			= form.getField({id : 'entity'});
		var customform		= form.getField({id : 'customform'});
    	
		// Sublist Item
		var averagecost		= itemObj.getField({id : 'averagecost'});
		var lastpurchaseprice		= itemObj.getField({id : 'lastpurchaseprice'});
		var amount  	 	= itemObj.getField({id : 'amount'});
		var rate  	 		= itemObj.getField({id : 'rate'});
		var grossamt 		= itemObj.getField({id : 'grossamt'});
		var taxcode 		= itemObj.getField({id : 'taxcode'});
		var taxrate1		= itemObj.getField({id : 'taxrate1'});
      	var vehiclenumber	= itemObj.getField({id : 'class'});
		//var taxamount		= itemObj.getField({id : 'taxamount'});
		
    	//###################
    	//## Global Change ##
    	//###################

		
    	//################################
    	//### FILTER CONDITION BY ROLE ###
    	//################################
    	
		
			
	
	
		// Role Transporter Logistik = customrole_gsu_logistik_reg1
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Transporter Pool = customrole_gsu_pool_regional_1
		// Role EPC Site = customrole_gsu_site_reg2
		// Role MNE Logistik = customrole_mne_logistik
		// Role Jateng Logistik = customrole_gsu_admin_jateng
		// Role GST Logistik = customrole_gst_logistik
		// Role Transporter Logistik = customrole_gsu_transporter_logistik
		if ((userObj.roleId == 'customrole_gsu_logistik_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_pool_regional_1')||(userObj.roleId == 'customrole_gsu_site_reg2')||(userObj.roleId == 'customrole_mne_logistik')||(userObj.roleId == 'customrole_gsu_admin_jateng')||(userObj.roleId == 'customrole_gst_logistik')||(userObj.roleId == 'customrole_gsu_transporter_logistik')){
			averagecost.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			lastpurchaseprice.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			amount.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			rate.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			grossamt.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//taxcode.updateDisplayType({displayType : serverWidget.FieldDisplayype.HIDDEN});
			taxrate1.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//taxamount.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			vehiclenumber.isMandatory=true;
          vehiclenumber.label='vehicle number';
		}
     if (userObj.roleId == 'customrole_mne_logistik'){
        averagecost.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			lastpurchaseprice.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			amount.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			rate.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			grossamt.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//taxcode.updateDisplayType({displayType : serverWidget.FieldDisplayype.HIDDEN});
			taxrate1.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//taxamount.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			 vehiclenumber.isMandatory=false;
        vehiclenumber.label='';
       	
			
        
      }
		
    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function beforeSubmit(scriptContext) {

    }

    /**
     * Function definition to be triggered before record is loaded.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.newRecord - New record
     * @param {Record} scriptContext.oldRecord - Old record
     * @param {string} scriptContext.type - Trigger type
     * @Since 2015.2
     */
    function afterSubmit(scriptContext) {

    }

    return {
        beforeLoad: beforeLoad,
//        beforeSubmit: beforeSubmit,
//        afterSubmit: afterSubmit
    };
    
});
