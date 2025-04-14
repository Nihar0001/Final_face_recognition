document.addEventListener('DOMContentLoaded', function() {
    // Flash message auto-dismiss
    const alerts = document.querySelectorAll('.flash-messages .flash');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 600);
        }, 5000);
    });

    // Role-based form fields (for registration page)
    const roleSelect = document.getElementById('role');
    const studentFields = document.getElementById('student_fields');
    const staffFields = document.getElementById('staff_fields');

    if (roleSelect) {
        function toggleRoleFields() {
            const role = roleSelect.value;
            if (studentFields) {
                studentFields.style.display = role === 'student' ? 'block' : 'none';
                const studentInputs = studentFields.querySelectorAll('input');
                studentInputs.forEach(input => input.required = (role === 'student'));
            }
            if (staffFields) {
                staffFields.style.display = role === 'staff' ? 'block' : 'none';
                const staffSelect = staffFields.querySelector('select');
                if (staffSelect) {
                    staffSelect.required = (role === 'staff');
                }
            }
        }
        roleSelect.addEventListener('change', toggleRoleFields);
        toggleRoleFields(); // Initialize on page load
    }
});