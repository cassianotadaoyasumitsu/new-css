import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["dropdown", "dropdownButton", "mobileMenu"]

    toggleDropdown() {
        this.dropdownTarget.classList.toggle("hidden");
    }

    openMobileMenu() {
        this.mobileMenuTarget.classList.remove("hidden");
    }

    closeMobileMenu() {
        this.mobileMenuTarget.classList.add("hidden");
    }
}
