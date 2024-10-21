import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-500 bg-opacity-35 bottom-0">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <h5 className="text-4xl font-serif font-semibold">Library 📚</h5>
          </div>

          <p className="mt-4 text-center text-base lg:mt-0 lg:text-right">
            Copyright &copy;{new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;