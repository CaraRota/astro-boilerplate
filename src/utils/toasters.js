const colors = {
  success: '10px solid #47D764', // Green border
  error: '10px solid #ff355b', // Red border
  warning: '10px solid #FFC021', // Yellow border
  info: '10px solid #2F86EB' // Blue border
}

const backgroundColors = {
  success: '#E6FFEA', // Light green background
  error: '#FFE6E9', // Light red background
  warning: '#FFF9E6', // Light yellow background
  info: '#E6F1FF' // Light blue background
}

const commonStyles = {
  borderRadius: '7px', // Rounded borders
  boxShadow: '0 15px 30px rgba(0,0,0,0.08)', // Subtle shadow
  padding: '10px', // Padding for better spacing
  margin: '10px' // Margin for spacing between toasts
}

const createToast = (message, type) => {
  Toastify({
    text: message,
    backgroundColor: backgroundColors[type],
    className: 'info',
    duration: 2000,
    style: {
      ...commonStyles,
      borderLeft: colors[type],
      color: '#101020' // Default text color for success, error, and warning
    }
  }).showToast()
}

export const successToast = (message) => {
  createToast(message, 'success')
}

export const errorToast = (message) => {
  createToast(message, 'error')
}

export const warningToast = (message) => {
  createToast(message, 'warning')
}

export const infoToast = (message) => {
  Toastify({
    text: message,
    backgroundColor: backgroundColors.info,
    className: 'info',
    duration: 2000,
    style: {
      ...commonStyles,
      borderLeft: colors.info,
      color: '#2F86EB' // Blue text color for info
    }
  }).showToast()
}
