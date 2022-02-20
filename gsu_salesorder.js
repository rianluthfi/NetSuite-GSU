/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/record', 'N/format', 'N/currentRecord', 'N/runtime', 'N/ui/message'],
/**
 * @param {record} record
 */
function(record, format, currentRecord, runtime, message) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(context) {

    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(context) {

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(context) {

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(context) {
		var userObj 		= runtime.getCurrentUser(); // For get current user
    	var rec 			= context.currentRecord;
    	
    	var countLine = rec.getLineCount({
    		sublistId : 'item'
    	});
		
		// Regional 1 Roles
		// customrole_gsu_sales_manager	> GSU Regional 1 Sales
		// customrole_gsu_sales_person  > GSU Regional 1 Pool
		
		if ((userObj.department == 1)||(userObj.department == 2)){
			var uangJalan = 0;
			var uangRitasi = 0;
			var tambahanUangJalan = 0;
			
			// Penghitungan bonus uang jalan di ritasi ke 2 pada hari yang sama
			if (countLine > 1){
				var uangJalan = rec.getSublistValue({
							sublistId : 'item',
							fieldId : 'averagecost',
							line : 1
				});
				if (uangJalan == undefined){
					alert('WARNING ! Item Uang Jalan ini belum bisa digunakan, pastikan Item ini sudah di Adjust/Jurnal Balik, info lebih lanjut hubungi Mas Micco <Admin> !');
					uangJalan = 0;
				}
			}
			
			if (countLine > 2){
				var uangRitasi = rec.getSublistValue({
							sublistId : 'item',
							fieldId : 'averagecost',
							line : 2
				});
				if (uangRitasi == undefined){
					alert('WARNING ! Item Uang Ritasi ini belum bisa digunakan, pastikan Item ini sudah di Adjust/Jurnal Balik, info lebih lanjut hubungi Mas Micco <Admin> !');
					uangRitasi = 0;
				}
			}
			
			if (countLine >= 4){
				for(var i = 3; i < countLine; i++){
					addUJ = rec.getSublistValue({
							sublistId : 'item',
							fieldId : 'averagecost',
							line : i
					});
					kategori = rec.getSublistValue({
							sublistId : 'item',
							fieldId : 'custcol_gsu_kategori_item',
							line : i
					});
					if(kategori == 13){
						addUJ = 0;
					}
			
					if (addUJ == undefined){
						alert('WARNING ! Item Uang Jalan ini belum bisa digunakan, pastikan Item ini sudah di Adjust/Jurnal Balik, info lebih lanjut hubungi Mas Micco <Admin> !');
						addUJ = 0;
					}
					tambahanUangJalan += addUJ;
				}
			}
			rec.setValue('custbody_gsu_uang_jalan', uangJalan+tambahanUangJalan);
			rec.setValue('custbody_gsu_uang_ritasi', uangRitasi);
		}
    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(context) {
    	
    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(context) {
    	
    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(context) {
    	var rec 			= context.currentRecord;
    	var userObj 		= runtime.getCurrentUser(); // For get current user

		var line = rec.getLineCount({
    		sublistId : 'item'
    	});
		
		if ((userObj.department == 1)||(userObj.department == 2)){
			// Copy Informasi Order ke body (Untuk Regional 1)
			if (rec.getCurrentSublistIndex('item') == 0){
				var itemOrder = rec.getCurrentSublistValue({
							sublistId : 'item',
							fieldId : 'description'
				});
				var volumeOrder = rec.getCurrentSublistValue({
							sublistId : 'item',
							fieldId : 'quantity'
				});
				var rateOrder = rec.getCurrentSublistValue({
							sublistId : 'item',
							fieldId : 'rate'
				});
				var amountOrder = rec.getCurrentSublistValue({
							sublistId : 'item',
							fieldId : 'amount'
				});
				
				rec.setValue('custbody_gsu_sale_item_order', itemOrder);
				rec.setValue('custbody_gsu_sale_quantity_item', volumeOrder);
				rec.setValue('custbody_gsu_sale_rate_item', rateOrder);
				rec.setValue('custbody_gsu_sale_amount_item', amountOrder);
			}
		}
		
		rec.setCurrentSublistValue('item', 'custcol_gsu_no', rec.getCurrentSublistIndex('item')+1);

    	return true;
    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(context) {

    }

    return {
//        pageInit: pageInit,
//        fieldChanged: fieldChanged,
//        postSourcing: postSourcing,
        sublistChanged: sublistChanged,
//        lineInit: lineInit,
//        validateField: validateField,
        validateLine: validateLine
//        validateInsert: validateInsert,
//        validateDelete: validateDelete,
//        saveRecord: saveRecord
    };
    
});
