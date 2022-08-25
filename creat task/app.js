
$(function() {
    function removetask() {
        $(".remove-task").off('click').on('click', function(event) {
          event.stopPropagation();
          $(this).parents('.single-task-item').remove();
        })
    }
   $('#add-tasks').on('click', function(event) {
        $('#addtasksmodal').modal('show');
        $('#btn-n-save').hide();
        $('#btn-n-add').show();
    })

    
    $("#btn-n-add").on('click', function(event) {
        event.preventDefault();
     
        var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()); 
      var yyyy = today.getFullYear();
      var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      today = dd + ' ' + monthNames[mm]  + ' ' + yyyy;

        let $_taskTitle = document.getElementById('taskTitle').value;
        let $_taskDescription = document.getElementById('taskDesc').value;
        let $_tasktaskDrop = document.getElementById('taskDrop').value;
        localStorage.setItem(' taskTitle', $_taskTitle);
        localStorage.setItem(' taskDesc', $_taskDescription);
        localStorage.setItem(' taskDrop', $_tasktaskDrop);



        $html =     '<div class="col-md-4 single-task-item all-category"><div class="card card-body">' +
                                '<span class="side-stick"></span>' +
                                '<h5 class="task-title text-truncate w-75 mb-0" data-taskHeading="'+$_taskTitle+'">'+$_taskTitle+'</i></h5>'+$_tasktaskDrop+
                                '<p class="task-date font-12 text-muted">'+today+'</p>' +
                                '<div class="task-content">' +
                                    '<p class="task-inner-content text-muted" data-taskContent="'+$_taskDescription+'">'+$_taskDescription+'</p>' +
                                '</div>' +
                                '<div class="d-flex align-items-center">' +
                                    '<span class="mr-1"><i class="fa fa-star favourite-task"></i></span>' +
                                    '<span class="mr-1"><i class="fa fa-trash remove-task"></i></span>' +
                                    '<div class="ml-auto">' +
                                          '<div class="category-selector btn-group">' +
                                                    
                                                   
                                         '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div></div> ';

        $("#task-full-container").prepend($html);
        $('#addtasksmodal').modal('hide');

        removetask();
        favouritetask();
        addLabelGroups();
    });

    $('#addtasksmodal').on('hidden.bs.modal', function (event) {
        event.preventDefault();
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDesc').value = '';
    })

    removetask();
    favouritetask();
    addLabelGroups();

    $('#btn-n-add').attr('disabled', 'disabled'); 
})

 $('#taskTitle').keyup(function() {
      var empty = false;
      $('#taskTitle').each(function() {
          if ($(this).val() == '') {
                  empty = true;
          }
      });

      if (empty) {
          $('#btn-n-add').attr('disabled', 'disabled'); 
      } else {
          $('#btn-n-add').removeAttr('disabled');
      }
}); 

