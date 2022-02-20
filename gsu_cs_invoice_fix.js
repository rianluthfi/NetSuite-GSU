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
	Module			: Sales Order (Client Script)
 */
 

//Gading
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
		// var rec = context.currentRecord;
		// var userObj 		= runtime.getCurrentUser();
		
		// Role Regional 1 Logistik = customrole_gsu_logistik_reg1
		// Role Regional 2 Logistik = customrole1014_0
		// if ((userObj.roleId == 'customrole_gsu_logistik_reg1')||(userObj.roleId == 'customrole1014_0')||(userObj.roleId == 'customrole_gsu_pool_regional_1')||(userObj.roleId == 'customrole_gsu_site_reg2')){
			// rec.setValue('entity', 97);
		// }
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
    function postSourcing(scriptContext) {

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
		// var rec 			= context.currentRecord;
		// var userObj 		= runtime.getCurrentUser();
		
		// Role Regional 1 Logistik = customrole_gsu_logistik_reg1
		// Role Regional 2 Logistik = customrole1014_0
		// if ((userObj.roleId == 'customrole_gsu_logistik_reg1')||(userObj.roleId == 'customrole1014_0')||(userObj.roleId == 'customrole_gsu_pool_regional_1')||(userObj.roleId == 'customrole_gsu_site_reg2')){
			// var biayasparepart = 0;
		
			// var lineCount = rec.getLineCount({sublistId : 'item'});
			
			// if(lineCount > 0){
				// for (var i = 0; i < lineCount; i++){
					// var totalCostLine = rec.getSublistValue({
								// sublistId : 'item',
								// fieldId : 'custcol_gsu_total_cost_line',
								// line : i
					// });
					// biayasparepart += totalCostLine;
				// }
				// rec.setValue('custbody_gsu_total_biaya_sparepart', biayasparepart);
				// rec.setValue('custbody_gsu_cp_terbilang', terbilang(Math.round(biayasparepart)));
			// }
		// }
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
		// var rec = context.currentRecord;
		// var userObj 		= runtime.getCurrentUser();
		
		// var cost = 0;
		// var totalCost = 0;
		
		// Role Regional 1 Logistik = customrole_gsu_logistik_reg1
		// Role Regional 2 Logistik = customrole1014_0
		// if ((userObj.roleId == 'customrole_gsu_logistik_reg1')||(userObj.roleId == 'customrole1014_0')||(userObj.roleId == 'customrole_gsu_pool_regional_1')||(userObj.roleId == 'customrole_gsu_site_reg2')){
			// if (context.sublistId  == 'item'){
				// var quantity = rec.getCurrentSublistValue('item', 'quantity');
				// var lastpurchaseprice = rec.getCurrentSublistValue('item', 'lastpurchaseprice');
				// var averagecost = rec.getCurrentSublistValue('item', 'averagecost');
				// if (averagecost == undefined){
					// alert('Item ini tidak memiliki nilai Cost, Jangan lanjutkan transaksi dengan item ini !');
				// }
				// if (lastpurchaseprice == undefined){
					// if (averagecost == undefined){
						// alert ('Anda Tidak dapat melanjutkan Transaksi ini !, karena Item tidak memiliki Cost !');
						// rec.setCurrentSublistValue('item', 'custcol_gsu_cost_line', cost);
					// }else{
						// alert('Cost Nilai pembelian item ini tidak diketahui system, Cost yang akan anda gunakan adalah nilai dari Average Cost Item !');
						// rec.setCurrentSublistValue('item', 'custcol_gsu_cost_line', averagecost);
						// cost = averagecost;
					// }
				// }else{
					// rec.setCurrentSublistValue('item', 'custcol_gsu_cost_line', lastpurchaseprice);
					// cost = lastpurchaseprice;
				// }
				// if (cost == 0){
					// alert('Anda tidak dapat melakukan transaksi dengan nilai Cost 0 !');
				// }
				// var totalCost = quantity * cost;
				// rec.setCurrentSublistValue('item', 'custcol_gsu_no', rec.getCurrentSublistIndex('item')+1);
				// rec.setCurrentSublistValue('item', 'custcol_gsu_total_cost_line', totalCost);
				// rec.setCurrentSublistValue('item', 'rate', 0);
			// }
		// }
		// return true;
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
        // pageInit: pageInit,
        // fieldChanged: fieldChanged,
        // postSourcing: postSourcing,
         sublistChanged: sublistChanged,
        // lineInit: lineInit,
        // validateField: validateField,
        // validateLine: validateLine,
        // validateInsert: validateInsert,
        // validateDelete: validateDelete,
        // saveRecord: saveRecord
    };
    
});
