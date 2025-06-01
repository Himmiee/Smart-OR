export const submitToWaitlist = async (
  email: string
): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("Google Script URL not configured");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email }).toString(),
    });

    if (response.ok) {
      return { success: true, message: "Response submitted successfully!" };
    } else {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return { success: false, message: "Failed to connect. Try again later." };
  }
};
