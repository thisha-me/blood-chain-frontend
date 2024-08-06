import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PartnerForm.css';

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  mobile: yup.string().required("Mobile is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  brNumber: yup.string().required("BR Number is required"),
  vatNumber: yup.string().required("VAT Number is required"),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  department: yup.string().required("Department is required"),
  nic: yup.string().required("NIC is required"),
  designation: yup.string().required("Designation is required"),
  whatsappBusiness: yup.string().required("Whatsapp Business is required"),
  directorName: yup.string().required("Director Name is required"),
  directorId: yup.string().required("Director ID is required"),
  directorEmail: yup.string().email("Invalid email").required("Director Email is required"),
  directorMobile: yup.string().required("Director Mobile is required"),
  brCertificate: yup.mixed().required("BR Certificate is required"),
  vatCertificate: yup.mixed().required("VAT Certificate is required"),
});

const PartnerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    axios.post('/api/partner', formData)
      .then(response => {
        alert("Form submitted successfully");
      })
      .catch(error => {
        alert("Error submitting form");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Become a Partner</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" {...register('firstName')} className="form-control" />
              {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" {...register('mobile')} className="form-control" />
              {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
            </div>
            <div className="form-group">
              <label>BR Number</label>
              <input type="text" {...register('brNumber')} className="form-control" />
              {errors.brNumber && <p className="text-danger">{errors.brNumber.message}</p>}
            </div>
            <div className="form-group">
              <label>VAT Number</label>
              <input type="text" {...register('vatNumber')} className="form-control" />
              {errors.vatNumber && <p className="text-danger">{errors.vatNumber.message}</p>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" {...register('address')} className="form-control" />
              {errors.address && <p className="text-danger">{errors.address.message}</p>}
            </div>
            <div className="form-group">
              <label>Select Country</label>
              <select {...register('country')} className="form-control">
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                {/* Add more countries as needed */}
              </select>
              {errors.country && <p className="text-danger">{errors.country.message}</p>}
            </div>
            <div className="form-group">
              <label>Department</label>
              <input type="text" {...register('department')} className="form-control" />
              {errors.department && <p className="text-danger">{errors.department.message}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" {...register('lastName')} className="form-control" />
              {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" {...register('email')} className="form-control" />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label>Attach BR Certificate</label>
              <input type="file" {...register('brCertificate')} className="form-control" />
              {errors.brCertificate && <p className="text-danger">{errors.brCertificate.message}</p>}
            </div>
            <div className="form-group">
              <label>Attach VAT Certificate</label>
              <input type="file" {...register('vatCertificate')} className="form-control" />
              {errors.vatCertificate && <p className="text-danger">{errors.vatCertificate.message}</p>}
            </div>
            <div className="form-group">
              <label>NIC</label>
              <input type="text" {...register('nic')} className="form-control" />
              {errors.nic && <p className="text-danger">{errors.nic.message}</p>}
            </div>
            <div className="form-group">
              <label>Designation</label>
              <input type="text" {...register('designation')} className="form-control" />
              {errors.designation && <p className="text-danger">{errors.designation.message}</p>}
            </div>
            <div className="form-group">
              <label>Whatsapp Business</label>
              <input type="text" {...register('whatsappBusiness')} className="form-control" />
              {errors.whatsappBusiness && <p className="text-danger">{errors.whatsappBusiness.message}</p>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <h3>Director Details</h3>
          <label>Director Name</label>
          <input type="text" {...register('directorName')} className="form-control" />
          {errors.directorName && <p className="text-danger">{errors.directorName.message}</p>}
        </div>
        <div className="form-group">
          <label>Director ID</label>
          <input type="text" {...register('directorId')} className="form-control" />
          {errors.directorId && <p className="text-danger">{errors.directorId.message}</p>}
        </div>
        <div className="form-group">
          <label>Director Email</label>
          <input type="text" {...register('directorEmail')} className="form-control" />
          {errors.directorEmail && <p className="text-danger">{errors.directorEmail.message}</p>}
        </div>
        <div className="form-group">
          <label>Director Mobile</label>
          <input type="text" {...register('directorMobile')} className="form-control" />
          {errors.directorMobile && <p className="text-danger">{errors.directorMobile.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default PartnerForm;
