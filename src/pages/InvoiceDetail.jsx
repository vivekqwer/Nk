import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/invoice-detail.css';

function InvoiceDetail() {
  return (
    <div className="invoice-detail-page">
      {/* TopNavBar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <div className="logo-section">
              <div className="logo-icon">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <span className="logo">Harmony LMS</span>
            </div>
            <div className="nav-links">
              <a href="#">Courses</a>
              <a href="#">Library</a>
              <a href="#">Studios</a>
            </div>
          </div>
          <div className="navbar-right">
            <div className="search-bar">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Search invoices..." />
            </div>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="avatar"></div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Action Bar */}
        <div className="action-bar">
          <div className="breadcrumb">
            <nav>
              <a href="#">Dashboard</a>
              <span>/</span>
              <a href="#">Billing</a>
              <span>/</span>
              <span className="current">INV-2024-0892</span>
            </nav>
            <h1>Invoice Details</h1>
          </div>
          <div className="action-buttons">
            <button className="btn-secondary">
              <span className="material-symbols-outlined">print</span>
              Print
            </button>
            <button className="btn-primary">
              <span className="material-symbols-outlined">download</span>
              Download PDF
            </button>
          </div>
        </div>

        {/* Invoice Card */}
        <div className="invoice-card">
          {/* PAID Watermark */}
          <div className="watermark">
            <span>PAID</span>
          </div>

          {/* Header Section */}
          <div className="invoice-header">
            <div className="from-section">
              <div className="logo-row">
                <div className="logo-icon">
                  <span className="material-symbols-outlined">graphic_eq</span>
                </div>
                <span className="brand">Harmony LMS</span>
              </div>
              <div className="address">
                <p className="mono">From</p>
                <p className="font-medium">Harmony Recording Studios</p>
                <p className="text-muted">
                  4422 Vinyl Way, Studio B<br />
                  Nashville, TN 37203<br />
                  United States
                </p>
              </div>
            </div>
            <div className="invoice-info">
              <div className="invoice-title">
                <h2>Invoice</h2>
                <p className="mono">#INV-2024-0892</p>
              </div>
              <div className="date-grid">
                <div>
                  <p className="mono">Date Issued</p>
                  <p>Oct 12, 2024</p>
                </div>
                <div>
                  <p className="mono">Due Date</p>
                  <p>Oct 26, 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Billed To Section */}
          <div className="billed-section">
            <div className="billed-to">
              <p className="mono">Billed To</p>
              <h3>Alexander Sterling</h3>
              <p className="text-muted">
                The Masterclass Academy<br />
                98 Rhythm Road, Apt 4C<br />
                Austin, TX 78701<br />
                alex.sterling@example.com
              </p>
            </div>
            <div className="payment-status">
              <div className="status-badge">
                <span className="material-symbols-outlined filled">check_circle</span>
                Payment Received via Credit Card (**** 4421)
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="items-section">
            <div className="table-header">
              <div className="col-6">Description</div>
              <div className="col-2 text-center">Qty</div>
              <div className="col-2 text-right">Unit Price</div>
              <div className="col-2 text-right">Amount</div>
            </div>
            <div className="table-row">
              <div className="col-6">
                <h4>Pro Plan Monthly</h4>
                <p className="text-muted">Full access to Analog Recording Masterclass and Studio Library tools.</p>
              </div>
              <div className="col-2 text-center mono">01</div>
              <div className="col-2 text-right mono">$49.00</div>
              <div className="col-2 text-right mono font-bold">$49.00</div>
            </div>
            <div className="table-row">
              <div className="col-6">
                <h4>MIDI Pack: Vintage Drums</h4>
                <p className="text-muted">Exclusive high-fidelity drum patterns recorded on Neve consoles.</p>
              </div>
              <div className="col-2 text-center mono">01</div>
              <div className="col-2 text-right mono">$15.00</div>
              <div className="col-2 text-right mono font-bold">$15.00</div>
            </div>
          </div>

          {/* Totals Section */}
          <div className="totals-section">
            <div className="notes-section">
              <div className="notes-card">
                <p className="mono">Notes</p>
                <p className="text-muted italic">
                  "Thank you for being part of the Harmony LMS family. Your support allows us to continue providing the highest quality analog recording education."
                </p>
              </div>
            </div>
            <div className="totals-card">
              <div className="total-row">
                <span>Subtotal</span>
                <span className="mono">$64.00</span>
              </div>
              <div className="total-row">
                <span>Tax (CGST 9%)</span>
                <span className="mono">$5.76</span>
              </div>
              <div className="total-row">
                <span>Tax (SGST 9%)</span>
                <span className="mono">$5.76</span>
              </div>
              <div className="divider"></div>
              <div className="total-row final">
                <span>Total Amount</span>
                <span className="mono font-black">$75.52</span>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="invoice-footer">
            <div className="signature-section">
              <div className="signature">
                <span className="mono">Signature</span>
                <span className="signature-text">J. Harrison</span>
              </div>
            </div>
            <div className="footer-text">
              <p className="mono">Harmonizing the future of sound</p>
              <p className="text-muted italic">Electronically generated. No physical signature required.</p>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="nav-btn prev">
            <span className="material-symbols-outlined">arrow_back</span>
            Previous Invoice
          </button>
          <button className="nav-btn next">
            Next Invoice
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Analog Master LMS. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Instructor Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InvoiceDetail;
