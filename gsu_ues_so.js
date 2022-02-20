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
		var tranid 			= form.getField({id : 'tranid'});
		var entity			= form.getField({id : 'entity'});
		var trandate		= form.getField({id : 'trandate'});
		var orderstatus		= form.getField({id : 'orderstatus'});
		var otherrefnum 	= form.getField({id : 'otherrefnum'});
		var vehicle			= form.getField({id : 'class'});
		var department		= form.getField({id : 'department'});
		var location		= form.getField({id : 'location'});
		
		var nosuratperintah	= form.getField({id : 'custbody_gsu_surat_perintah'});
		var nosuratjalan	= form.getField({id : 'custbody_gsu_no_surat_jalan'});
		var namasupir		= form.getField({id : 'custbody_gsu_nama_supir'});
		var tglsuratjalan	= form.getField({id : 'custbody_gsu_tanggal_surat_jalan'});
		var tgltagihan		= form.getField({id : 'custbody_gsu_tanggal_tagihan'});
      	var fotosuratjalan	= form.getField({id : 'custbody_gsu_foto_surat_jalan'});
		
    	var orderitem 		= form.getField({id : 'custbody_gsu_sale_item_order'});
		var rateitem 		= form.getField({id : 'custbody_gsu_sale_rate_item'});
		var quantityitem 	= form.getField({id : 'custbody_gsu_sale_quantity_item'});
		var amountitem 		= form.getField({id : 'custbody_gsu_sale_amount_item'});
		var uangjalan 		= form.getField({id : 'custbody_gsu_uang_jalan'});
  	    var mutubeton 		= form.getField({id : 'custcol_mutu_beton'});
		var slump	 		= form.getField({id : 'custcol_slump'});
      
		
		var rate  	 		= itemObj.getField({id : 'rate'});
		var amount  	 	= itemObj.getField({id : 'amount'});
      var averagecost  	 		= itemObj.getField({id : 'averagecost'});
		var lastpurchaseprice  	 	= itemObj.getField({id : 'lastpurchaseprice'});
		/*
		// Sublist Item
		var item 			= itemObj.getField({id : 'item'});
    	
    	var taxcode 		= itemObj.getField({id : 'taxcode'});
    	var taxrate1 		= itemObj.getField({id : 'taxrate1'});
    	var taxamt1   		= itemObj.getField({id : 'taxamt1'});
    	var grossamt 		= itemObj.getField({id : 'grossamt'});
    	var vechicleNum 	= itemObj.getField({id : 'class'});
    	var sublocation 	= itemObj.getField({id : 'location'});
    	var subdepartment 	= itemObj.getField({id : 'department'});
    	var averagecost 	= itemObj.getField({id : 'averagecost'});
    	var totCostSublist 	= itemObj.getField({id : 'custcol_gsu_total_cost'});
    	var quantityfulfilled 	= itemObj.getField({id : 'quantityfulfilled'});
    	var quantitybilled 	= itemObj.getField({id : 'quantitybilled'});
		*/
    	
    	//###################
    	//## Global Change ##
    	//###################
		rate.isMandatory = true;
		
		//################################
    	//### FILTER CONDITION BY ROLE ###
    	//################################
		
		// Tampilan Pool
        if (userObj.roleId == 'customrole_gsu_pool_regional_1'){
			nosuratperintah.isMandatory = true;
			nosuratjalan.isMandatory = true;
			vehicle.isMandatory = true;
			namasupir.isMandatory = true;
			tglsuratjalan.isMandatory = true;
			tgltagihan.isMandatory = true;
          	//fotosuratjalan.isMandatory = true;
			
			tranid.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			entity.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			trandate.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			otherrefnum.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			department.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			location.updateDisplayType({displayType : serverWidget.FieldDisplayType.INLINE});
			
			//orderitem.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			rateitem.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//quantityitem.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			amountitem.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//uangjalan.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			//
            averagecost.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
            lastpurchaseprice.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
			
        	amount.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
        	rate.updateDisplayType({displayType : serverWidget.FieldDisplayType.HIDDEN});
        }
      if ((userObj.roleId == 'administrator')||(userObj.roleId == 'customrole_gtw_accounting')){
        rate.isMandatory = false;
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
