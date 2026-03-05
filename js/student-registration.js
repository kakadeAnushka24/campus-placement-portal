let currentStep = 1;

function validateStep1() {
    let ok = true;
    const checks = [
      ['firstName', v => v.trim().length > 0],
      ['lastName',  v => v.trim().length > 0],
      ['dob',       v => v !== ''],
      ['gender',    v => v !== ''],
      ['phone',     v => /^[+\d]{10,13}$/.test(v.replace(/\s/g,''))],
    ];
    checks.forEach(([id, fn]) => {
      const el = document.getElementById(id);
      const err = document.getElementById('err-' + id);
      const valid = fn(el.value);
      el.classList.toggle('error', !valid);
      err.classList.toggle('show', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }

  function validateStep2() {
    let ok = true;
    const checks = [
      ['college',  v => v.trim().length > 0],
      ['branch',   v => v !== ''],
      ['passYear', v => v !== ''],
      ['cgpa',     v => v !== '' && +v >= 0 && +v <= 10],
    ];
    checks.forEach(([id, fn]) => {
      const el = document.getElementById(id);
      const err = document.getElementById('err-' + id);
      const valid = fn(el.value);
      el.classList.toggle('error', !valid);
      err.classList.toggle('show', !valid);
      if (!valid) ok = false;
    });
    return ok;
  }

function nextStep(from) {
    const valid = from === 1 ? validateStep1() : from === 2 ? validateStep2() : true;
    if (!valid) return;
    currentStep = from + 1;
    updateStepUI(currentStep);
  }
  function prevStep(from) {
    currentStep = from - 1;
    updateStepUI(currentStep);
  }
  function submitForm() {
    if (!validateStep3()) return;
    document.getElementById('panel3').classList.remove('active');
    document.getElementById('successBox').classList.add('show');
    showToast('🎉 Registration successful! Welcome to CampusHire.');
  }