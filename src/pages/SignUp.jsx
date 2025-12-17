import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";

import { LoaderCircle, ChevronDown } from "lucide-react";

const Signup = () => {
  const dispatch = useDispatch();

  const roles = useSelector((store) => store.client.roles);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role_id: "3",
    },
    mode: "all",
  });

  const selectedRoleId = watch("role_id");

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const onSubmit = (formData) => {
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role_id: formData.role_id,
    };

    const selectedRoleObj = roles.find((r) => r.id == formData.role_id);
    const isStore = selectedRoleObj?.code === "store";

    if (isStore) {
      payload.store = {
        name: formData.store_name,
        phone: formData.store_phone,
        tax_no: formData.store_tax_no,
        bank_account: formData.store_bank_account,
      };
    }

    axiosInstance
      .post("/signup", payload)
      .then((res) => {
        toast.success("Account created! Please check your email to activate.");
        setTimeout(() => {
          history.goBack();
        }, 2000);
      })
      .catch((err) => {
        const errorMsg = err.response?.data?.message || "Registration failed.";
        toast.error(errorMsg);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // --- custom css ---
  const inputClass =
    "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200";
  const labelClass = "block text-gray-700 font-semibold mb-2 text-sm";
  const errorClass = "text-red-500 text-xs mt-1 font-medium ml-1";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account now and start shopping.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* --- NAME --- */}
          <div>
            <label className={labelClass}>Name</label>
            <input
              placeholder=""
              className={inputClass}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Must be at least 3 characters",
                },
              })}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          {/* --- EMAIL --- */}
          <div>
            <label className={labelClass}>Email Address</label>
            <input
              placeholder=""
              type="email"
              className={inputClass}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>

          {/* --- PASSWORD --- */}
          <div>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              placeholder=""
              className={inputClass}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, numbers, and special chars.",
                },
              })}
            />
            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
            )}
          </div>

          {/* --- CONFIRM PASSWORD --- */}
          <div>
            <label className={labelClass}>Confirm Password</label>
            <input
              type="password"
              placeholder=""
              className={inputClass}
              {...register("confirmPassword", {
                validate: (val) => {
                  if (watch("password") !== val)
                    return "Passwords do not match";
                },
              })}
            />
            {errors.confirmPassword && (
              <p className={errorClass}>{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* --- ROLE SELECTION --- */}
          <div>
            <label className={labelClass}>Account Type</label>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none bg-white`}
                {...register("role_id")}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>

          {/* --- STORE FIELDS --- */}
          {roles.find((r) => r.id == selectedRoleId)?.code === "store" && (
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 animate-fade-in-down">
              <h3 className="font-bold text-blue-800 text-lg mb-4 border-b border-blue-200 pb-2">
                Store Details
              </h3>

              <div className="space-y-4">
                {/* Store Name */}
                <div>
                  <label className="block text-blue-900 text-sm font-medium mb-1">
                    Store Name
                  </label>
                  <input
                    className={inputClass}
                    {...register("store_name", {
                      required: "Store name is required",
                      minLength: { value: 3, message: "At least 3 characters" },
                    })}
                  />
                  {errors.store_name && (
                    <p className={errorClass}>{errors.store_name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-blue-900 text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    placeholder=""
                    className={inputClass}
                    {...register("store_phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^(\+90|0)?5\d{9}$/,
                        message: "Enter a valid TR phone number",
                      },
                    })}
                  />
                  {errors.store_phone && (
                    <p className={errorClass}>{errors.store_phone.message}</p>
                  )}
                </div>

                {/* Tax No */}
                <div>
                  <label className="block text-blue-900 text-sm font-medium mb-1">
                    Tax ID
                  </label>
                  <input
                    placeholder=""
                    className={inputClass}
                    {...register("store_tax_no", {
                      required: "Tax ID is required",
                      pattern: {
                        value: /^T\d{4}V\d{6}$/,
                        message: "Format: TXXXXVXXXXXX",
                      },
                    })}
                  />
                  {errors.store_tax_no && (
                    <p className={errorClass}>{errors.store_tax_no.message}</p>
                  )}
                </div>

                {/* IBAN */}
                <div>
                  <label className="block text-blue-900 text-sm font-medium mb-1">
                    Bank Account (IBAN)
                  </label>
                  <input
                    placeholder=""
                    className={inputClass}
                    {...register("store_bank_account", {
                      required: "IBAN is required",
                      pattern: {
                        value: /^TR\d{24}$/,
                        message: "Invalid IBAN format",
                      },
                    })}
                  />
                  {errors.store_bank_account && (
                    <p className={errorClass}>
                      {errors.store_bank_account.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* --- BUTTON --- */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white transition-all duration-200 transform hover:-translate-y-0.5 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <LoaderCircle className="animate-spin h-5 w-5 text-white" />
                Submitting...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
