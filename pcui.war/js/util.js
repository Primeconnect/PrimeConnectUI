'use strict';

function isVariableBlank(value) {
	if( value == undefined || value == null )
		return true;
	else
		return false;
}

function addFormValueToObject(formData,property,obj) {
	if( !isVariableBlank(formData[property]) )
	    obj[property] = formData[property];
}

//uses angular function
function convertCamelCase(text) {
	//TODO:
	//return attrs.$normalize(text);
}