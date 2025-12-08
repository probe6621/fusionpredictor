// fusion_ref.js — simple affiliate/referral tracking

(function() {
    // 1. Capture ?ref= from URL if present
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    // 2. Store in cookie for 30 days
    if (ref) {
        document.cookie = `fusion_ref=${ref}; path=/; max-age=${30*24*60*60}`;
    }

    // 3. Expose helper for other scripts
    window.getFusionRef = function() {
        const match = document.cookie.match(/fusion_ref=([^;]+)/);
        return match ? match[1] : null;
    };
})();
