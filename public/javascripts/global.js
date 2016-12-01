var voterListData = [];
var date = new Date();
var serial=1;

$(document).ready(function(){
	populateTable();
});

function populateTable(){
	var tableContent = '';

	$.getJSON('/users/voterlist', function(data){

		voterListData = data;

		$.each(data,function(){
			tableContent+='<tr>';
			tableContent+='<td><a href="#" class="linkserial">'+this.serial+'</a></td>';
			tableContent+='<td><a href="#" class="linkshowuser" rel="'+this.rollno+'">'+this.rollno+'</a></td>';
			tableContent+='<td><a href="#" class="linkshowbooth">'+this.booth+'</a></td>';
			tableContent+='<td><a href="#" class="linkshowtimestamp">'+this.timestamp+'</a></td>';	
			// tableContent+='<td><a href="#" class="linkdeleteuser" rel="'+this._id+'">delete</a></td>';
			tableContent+='</tr>';
		});

		$('#voterList table tbody').html(tableContent);
	});
};

$('#btnAddVoter').on('click',addVoter);

$(document).on('keydown',function(e){
	if(e.keyCode == 13){
		addVoter();
	}
});

// $('#voterList table tbody').on('click','td a.linkdeleteuser',deleteVoter);

function addVoter(event){
	event.preventDefault();

	var errorCount = 0;
	$('#addVoter input').each(function(index,val){
		if($(this).val() === ''){errorCount++;}
	});

	if(errorCount === 0){
		var newVoter = {
			'serial':serial,
			'rollno':$('#addVoter fieldset input#inputRollNo').val(),
			'booth':"ODF-REC",
			'timestamp':date.toUTCString()
		}

		$.ajax({
			type:'POST',
			data:newVoter,
			url:'/users/addvoter',
			dataType:'JSON'
		}).done(function(response){
			if(response.msg === ''){
				$('#addVoter fieldset input').val('');
				populateTable();
				serial++;
			}
			else{
				alert('Error:'+response.msg);
			}
		});
	}
	else{
		alert('Please fill in all fields');
		return false;
	}	
};

function getVoter(event){
	event.preventDefault();

}

// function deleteVoter(event){
// 	event.preventDefault();

// 	var confirmation = confirm('Are you sure you want to delete this voter?');

// 	if(confirmation === true){
// 		$.ajax({
// 			type:'DELETE',
// 			url:'/users/deletevoter/'+$(this).attr('rel')
// 		}).done(function(response){
// 			if(response.msg === ''){
// 				serial--;
// 			}
// 			else{
// 				alert('Error:'+response.msg);
// 			}
// 			populateTable();
// 		});
// 	}
// 	else{
// 		return false;
// 	}
// };