/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
 
  /*
	Project			: Implement NetSuite on PT Gading Semesta Utama
	Author			: Ilyasa Micco Harwanto
	Company			: GSU
	Date			: January 21, 2019
	Module			: Purchase Order (Client Script)
 */
 
define(['N/record', 'N/currentRecord', 'N/runtime'],

function(record, currentRecord, runtime) {
    
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
/**
 * Fungsi untuk buat field rate pada sublist PO menjadi inline sehingga tidak bisa diedit
 */		
  //   	var form 			= context.form; // Get Form context
    //	var itemObj  		= form.getSublist({id: 'items'}); // Get Sublist Item Object
    	
    	//################################
    	//### Deklarasi Variabel Field ###
    	//################################
    	    	
		// Sublist Item
		//var rate  	 		= itemObj.getField({id : 'rate'});
	      //{
    		//rate.updateDisplayType({displayType : currentRecord.FieldDisplayType.INLINE});
 			//}
 			//
 		var userObj 		= runtime.getCurrentUser(); // For get current user
 		//
 		// Role GSU CPO = customrole_gsu_cpo
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Purchasing GSU = customrole_gsu_purchasing_reg1
		// Role Accounting EPC = customrole1016_0
		 if ((userObj.roleId == 'customrole_gsu_purchasing_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_cpo')||(userObj.roleId == 'customrole1016_0'))
 		{		
      	  	nlapiDisableLineItemField('item', 'rate', true);
          	nlapiDisableLineItemField('item', 'amount', true);
          	nlapiDisableLineItemField('item', 'grossamt', true);
          	nlapiDisableLineItemField('item', 'tax1amt', true);
    	}
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
    function fieldChanged(scriptContext) {
		var userObj 		= runtime.getCurrentUser(); // For get current user
 		//
 		// Role GSU CPO = customrole_gsu_cpo
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Purchasing GSU = customrole_gsu_purchasing_reg1
		// Role Accounting EPC = customrole1016_0
		 if ((userObj.roleId == 'customrole_gsu_purchasing_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_cpo')||(userObj.roleId == 'customrole1016_0'))
      {		
      		nlapiDisableLineItemField('item', 'rate', true);
          	nlapiDisableLineItemField('item', 'amount', true);
          	nlapiDisableLineItemField('item', 'grossamt', true);
          	nlapiDisableLineItemField('item', 'tax1amt', true);
    	}
    }

    /**
     * Function to be executed when field is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {
		var userObj 		= runtime.getCurrentUser(); // For get current user
 		//
 		// Role GSU CPO = customrole_gsu_cpo
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Purchasing GSU = customrole_gsu_purchasing_reg1
		// Role Accounting EPC = customrole1016_0
		 if ((userObj.roleId == 'customrole_gsu_purchasing_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_cpo')||(userObj.roleId == 'customrole1016_0'))
      {		
      		nlapiDisableLineItemField('item', 'rate', true);
          	nlapiDisableLineItemField('item', 'amount', true);
          	nlapiDisableLineItemField('item', 'grossamt', true);
          	nlapiDisableLineItemField('item', 'tax1amt', true);
    	}
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
		var rec 			= context.currentRecord;
		var userObj 		= runtime.getCurrentUser();
		
		var lineCount 		= rec.getLineCount({sublistId : 'item'});
		
		
		
		
		if (lineCount > 0){
			var taxrate		= 	rec.getSublistValue({
									sublistId : 'item',
									fieldId : 'taxrate1',
									line : 0
								});
								//alert(taxrate);
			var total	= rec.getValue('total');
			rec.setValue('custbody_gsu_cp_terbilang', terbilang(Math.round(total)));
			rec.setValue('custbody_gsu_taxt_rate_po', taxrate);
		}
 		//
 		// Role GSU CPO = customrole_gsu_cpo
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Purchasing GSU = customrole_gsu_purchasing_reg1
		// Role Accounting EPC = customrole1016_0
		 if ((userObj.roleId == 'customrole_gsu_purchasing_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_cpo')||(userObj.roleId == 'customrole1016_0'))
      	{		
      		nlapiDisableLineItemField('item', 'rate', true);
          	nlapiDisableLineItemField('item', 'amount', true);
          	nlapiDisableLineItemField('item', 'grossamt', true);
          	nlapiDisableLineItemField('item', 'tax1amt', true);
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
    function lineInit(scriptContext) {
		var userObj 		= runtime.getCurrentUser(); // For get current user
 		//
 		// Role GSU CPO = customrole_gsu_cpo
		// Role EPC Logistik = customrole_gsu_logistik_reg2
		// Role Purchasing GSU = customrole_gsu_purchasing_reg1
		// Role Accounting EPC = customrole1016_0
		 if ((userObj.roleId == 'customrole_gsu_purchasing_reg1')||(userObj.roleId == 'customrole_gsu_logistik_reg2')||(userObj.roleId == 'customrole_gsu_cpo')||(userObj.roleId == 'customrole1016_0'))
      {		
      		nlapiDisableLineItemField('item', 'rate', true);
          	nlapiDisableLineItemField('item', 'amount', true);
          	nlapiDisableLineItemField('item', 'grossamt', true);
          	nlapiDisableLineItemField('item', 'tax1amt', true);
    	}
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
    function validateField(scriptContext) {
		
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
    function saveRecord(scriptContext) {

    }
	
	function terbilang(bilangan) {

		bilangan    = String(bilangan);
		var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
		var kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
		var tingkat = new Array('','Ribu','Juta','Milyar','Triliun');

		var panjang_bilangan = bilangan.length;

		/* pengujian panjang bilangan */
		if (panjang_bilangan > 15) {
			kaLimat = "Diluar Batas";
			return kaLimat;
		}

		/* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
		for (i = 1; i <= panjang_bilangan; i++) {
			angka[i] = bilangan.substr(-(i),1);
		}

		i = 1;
		j = 0;
		kaLimat = "";


		/* mulai proses iterasi terhadap array angka */
		while (i <= panjang_bilangan) {

			subkaLimat = "";
			kata1 = "";
			kata2 = "";
			kata3 = "";

			/* untuk Ratusan */
			if (angka[i+2] != "0") {
				if (angka[i+2] == "1") {
					kata1 = "Seratus";
				} else {
					kata1 = kata[angka[i+2]] + " Ratus";
				}
			}

			/* untuk Puluhan atau Belasan */
			if (angka[i+1] != "0") {
				if (angka[i+1] == "1") {
					if (angka[i] == "0") {
						kata2 = "Sepuluh";
					} else if (angka[i] == "1") {
						kata2 = "Sebelas";
					} else {
						kata2 = kata[angka[i]] + " Belas";
					}
				} else {
					kata2 = kata[angka[i+1]] + " Puluh";
				}
			}

			/* untuk Satuan */
			if (angka[i] != "0") {
				if (angka[i+1] != "1") {
					kata3 = kata[angka[i]];
				}
			}

			/* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
			if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")) {
				subkaLimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
			}

			/* gabungkan variabe sub kaLimat (untuk Satu blok 3 angka) ke variabel kaLimat */
			kaLimat = subkaLimat + kaLimat;
			i = i + 3;
			j = j + 1;
		}

		/* mengganti Satu Ribu jadi Seribu jika diperlukan */
		if ((angka[5] == "0") && (angka[6] == "0")) {
			kaLimat = kaLimat.replace("Satu Ribu","Seribu");
		}

		return kaLimat + "Rupiah";
	}

    return {
         pageInit: pageInit,
         fieldChanged: fieldChanged,
         postSourcing: postSourcing,
         sublistChanged: sublistChanged,
         lineInit: lineInit,
        // validateField: validateField,
        // validateLine: validateLine,
        // validateInsert: validateInsert,
        // validateDelete: validateDelete,
        // saveRecord: saveRecord
    };
    
});
